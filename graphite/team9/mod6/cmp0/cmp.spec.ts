
import { Cmp6960Component } from './cmp';
describe('Cmp6960Component', () => {
  it('should add', () => {
    expect(new Cmp6960Component().add6960(1)).toBe(6961);
  });
});