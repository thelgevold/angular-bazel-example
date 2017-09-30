
import { Cmp1306Component } from './cmp';
describe('Cmp1306Component', () => {
  it('should add', () => {
    expect(new Cmp1306Component().add1306(1)).toBe(1307);
  });
});