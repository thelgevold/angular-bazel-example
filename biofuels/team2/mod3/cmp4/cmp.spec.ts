
import { Cmp1234Component } from './cmp';
describe('Cmp1234Component', () => {
  it('should add', () => {
    expect(new Cmp1234Component().add1234(1)).toBe(1235);
  });
});