
import { Cmp6704Component } from './cmp';
describe('Cmp6704Component', () => {
  it('should add', () => {
    expect(new Cmp6704Component().add6704(1)).toBe(6705);
  });
});