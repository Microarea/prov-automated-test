import { test, expect } from '@playwright/test';
import { portalClient } from '../../../clients/portal.client';
import parameters from '../../../data/parameters.json';

test('All Courses Training Plans', async () => {
  const api = await portalClient();
  const user =  process.env.GWAM_USER;
  const pageIndex = parameters.GetAllCoursesTrainingPlans.pageIndex;
  const pageSize = parameters.GetAllCoursesTrainingPlans.pageSize;

  const res = await api.get(
    `be/api/university/getAllCoursesTrainingPlans/${user}` + 
      `?pageIndex=${pageIndex}` + 
      `&pageSize=${pageSize}`
  );
  
  console.log(await res.json());

  const body = await res.json();
  console.log(body);

  expect(res.status()).toBe(200);
  expect(body).toBeDefined();

  await api.dispose();
});