
import { Cmp6868Component } from './cmp';
describe('Cmp6868Component', () => {
  it('should add', () => {
    expect(new Cmp6868Component().add6868(1)).toBe(6869);
  });
});