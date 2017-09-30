
import { Cmp6629Component } from './cmp';
describe('Cmp6629Component', () => {
  it('should add', () => {
    expect(new Cmp6629Component().add6629(1)).toBe(6630);
  });
});