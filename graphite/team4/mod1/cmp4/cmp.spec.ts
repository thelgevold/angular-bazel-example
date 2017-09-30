
import { Cmp6414Component } from './cmp';
describe('Cmp6414Component', () => {
  it('should add', () => {
    expect(new Cmp6414Component().add6414(1)).toBe(6415);
  });
});