
import { Cmp1440Component } from './cmp';
describe('Cmp1440Component', () => {
  it('should add', () => {
    expect(new Cmp1440Component().add1440(1)).toBe(1441);
  });
});