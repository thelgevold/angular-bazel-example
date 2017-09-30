
import { Cmp6806Component } from './cmp';
describe('Cmp6806Component', () => {
  it('should add', () => {
    expect(new Cmp6806Component().add6806(1)).toBe(6807);
  });
});