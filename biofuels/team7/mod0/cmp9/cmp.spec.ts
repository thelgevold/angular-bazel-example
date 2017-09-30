
import { Cmp1709Component } from './cmp';
describe('Cmp1709Component', () => {
  it('should add', () => {
    expect(new Cmp1709Component().add1709(1)).toBe(1710);
  });
});