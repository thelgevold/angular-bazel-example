
import { Cmp6104Component } from './cmp';
describe('Cmp6104Component', () => {
  it('should add', () => {
    expect(new Cmp6104Component().add6104(1)).toBe(6105);
  });
});