
import { Cmp9806Component } from './cmp';
describe('Cmp9806Component', () => {
  it('should add', () => {
    expect(new Cmp9806Component().add9806(1)).toBe(9807);
  });
});