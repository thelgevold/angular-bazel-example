
import { Cmp9901Component } from './cmp';
describe('Cmp9901Component', () => {
  it('should add', () => {
    expect(new Cmp9901Component().add9901(1)).toBe(9902);
  });
});