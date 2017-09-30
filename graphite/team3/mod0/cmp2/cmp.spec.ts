
import { Cmp6302Component } from './cmp';
describe('Cmp6302Component', () => {
  it('should add', () => {
    expect(new Cmp6302Component().add6302(1)).toBe(6303);
  });
});