
import { Cmp2022Component } from './cmp';
describe('Cmp2022Component', () => {
  it('should add', () => {
    expect(new Cmp2022Component().add2022(1)).toBe(2023);
  });
});