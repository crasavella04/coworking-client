import { ICity } from "@/entities/city";
import {
  createFilterLink,
  getCurrentCity,
  useGetFilterData,
  useGetInitialFilterData,
} from "@/features/filter";
import { Button, Form, Input, Select } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FilterSkeleton from "./FilterSkeleton";
import styles from "./styles.module.css";

export default function Filter() {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const searchData = () => {
    const url = createFilterLink(form.getFieldsValue());
    navigate(url);
  };

  const { cities, conveniences, isLoading: filterLoading } = useGetFilterData();
  const initialFields = useGetInitialFilterData();

  const [currentCity, setCity] = useState<ICity | null>(
    getCurrentCity(initialFields, cities)
  );

  return (
    <Form layout="vertical" form={form} className={styles.filterContainer}>
      {filterLoading && <FilterSkeleton />}

      {!filterLoading && (
        <div className={styles.fieldsContainer}>
          <Form.Item
            label="Название / Ключевые слова"
            name={"text"}
            initialValue={
              initialFields.find((el) => el.field === "text")?.value
            }
          >
            <Input maxLength={60} />
          </Form.Item>
          <Form.Item label="Город" name={"city"} initialValue={currentCity?.id}>
            <Select
              showSearch
              filterOption={(input, option) =>
                (option?.label ?? "")
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
              options={cities.map((el) => ({ value: el.id, label: el.name }))}
              onChange={(e) => {
                const cityItem = cities.find((el) => el.id === e);
                setCity(cityItem || null);
              }}
            />
          </Form.Item>

          {currentCity && currentCity.metro.length !== 0 && (
            <Form.Item
              label="Метро"
              name={"metro"}
              initialValue={
                Number(
                  initialFields.find((el) => el.field === "metro")?.value
                ) || currentCity.metro[0].id
              }
            >
              <Select
                showSearch
                filterOption={(input, option) =>
                  (option?.label ?? "")
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
                options={currentCity.metro.map((el) => ({
                  value: el.id,
                  label: el.name,
                }))}
              />
            </Form.Item>
          )}

          <Form.Item
            label="Услуги"
            name={"convenience"}
            initialValue={
              Number(
                initialFields.find((el) => el.field === "convenience")?.value
              ) || 0
            }
          >
            <Select
              showSearch
              options={[
                { value: 0, label: "Все услуги" },
                ...conveniences.map((el) => ({ value: el.id, label: el.name })),
              ]}
            />
          </Form.Item>
        </div>
      )}
      <Form.Item className={styles.submitButton}>
        <Button
          disabled={filterLoading}
          size="large"
          type="primary"
          style={{ width: "100%" }}
          onClick={searchData}
        >
          Искать
        </Button>
      </Form.Item>
    </Form>
  );
}
