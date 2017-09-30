
import { Cmp2023Component } from './cmp';
describe('Cmp2023Component', () => {
  it('should add', () => {
    expect(new Cmp2023Component().add2023(1)).toBe(2024);
  });
});