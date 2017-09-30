
import { Cmp1302Component } from './cmp';
describe('Cmp1302Component', () => {
  it('should add', () => {
    expect(new Cmp1302Component().add1302(1)).toBe(1303);
  });
});