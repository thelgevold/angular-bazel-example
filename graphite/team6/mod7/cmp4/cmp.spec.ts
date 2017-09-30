
import { Cmp6674Component } from './cmp';
describe('Cmp6674Component', () => {
  it('should add', () => {
    expect(new Cmp6674Component().add6674(1)).toBe(6675);
  });
});