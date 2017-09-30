
import { Cmp6579Component } from './cmp';
describe('Cmp6579Component', () => {
  it('should add', () => {
    expect(new Cmp6579Component().add6579(1)).toBe(6580);
  });
});