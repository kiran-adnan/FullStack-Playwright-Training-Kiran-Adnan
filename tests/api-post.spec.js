const { test, expect } = require('@playwright/test');
const { executionAsyncId } = require('async_hooks');

test('Post the bookings', async ({ request }) => {
    const response = await request.post("https://restful-booker.herokuapp.com/booking", {
    data:{
    "firstname" : "Kiran",
    "lastname" : "Adnan",
    "totalprice" : 111,
    "depositpaid" : true,
    "bookingdates" : {
        "checkin" : "2018-01-01",
        "checkout" : "2019-01-01"
    },
    "additionalneeds" : "Breakfast"
    }
});
    console.log (await response.json());
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    expect (responseBody.booking).toHaveProperty("firstname", "Kiran");
  });