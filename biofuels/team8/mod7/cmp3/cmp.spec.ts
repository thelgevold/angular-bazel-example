
import { Cmp1873Component } from './cmp';
describe('Cmp1873Component', () => {
  it('should add', () => {
    expect(new Cmp1873Component().add1873(1)).toBe(1874);
  });
});