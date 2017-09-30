
import { Cmp1251Component } from './cmp';
describe('Cmp1251Component', () => {
  it('should add', () => {
    expect(new Cmp1251Component().add1251(1)).toBe(1252);
  });
});