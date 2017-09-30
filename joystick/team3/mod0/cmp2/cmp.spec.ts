
import { Cmp9302Component } from './cmp';
describe('Cmp9302Component', () => {
  it('should add', () => {
    expect(new Cmp9302Component().add9302(1)).toBe(9303);
  });
});