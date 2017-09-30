
import { Cmp6064Component } from './cmp';
describe('Cmp6064Component', () => {
  it('should add', () => {
    expect(new Cmp6064Component().add6064(1)).toBe(6065);
  });
});