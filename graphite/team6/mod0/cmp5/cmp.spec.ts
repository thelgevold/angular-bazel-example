
import { Cmp6605Component } from './cmp';
describe('Cmp6605Component', () => {
  it('should add', () => {
    expect(new Cmp6605Component().add6605(1)).toBe(6606);
  });
});