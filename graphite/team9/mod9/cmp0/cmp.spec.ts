
import { Cmp6990Component } from './cmp';
describe('Cmp6990Component', () => {
  it('should add', () => {
    expect(new Cmp6990Component().add6990(1)).toBe(6991);
  });
});