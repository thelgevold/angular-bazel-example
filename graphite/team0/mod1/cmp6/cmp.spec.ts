
import { Cmp6016Component } from './cmp';
describe('Cmp6016Component', () => {
  it('should add', () => {
    expect(new Cmp6016Component().add6016(1)).toBe(6017);
  });
});