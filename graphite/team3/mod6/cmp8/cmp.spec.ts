
import { Cmp6368Component } from './cmp';
describe('Cmp6368Component', () => {
  it('should add', () => {
    expect(new Cmp6368Component().add6368(1)).toBe(6369);
  });
});