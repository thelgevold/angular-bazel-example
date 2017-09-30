
import { Cmp6339Component } from './cmp';
describe('Cmp6339Component', () => {
  it('should add', () => {
    expect(new Cmp6339Component().add6339(1)).toBe(6340);
  });
});