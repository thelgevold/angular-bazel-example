
import { Cmp6959Component } from './cmp';
describe('Cmp6959Component', () => {
  it('should add', () => {
    expect(new Cmp6959Component().add6959(1)).toBe(6960);
  });
});