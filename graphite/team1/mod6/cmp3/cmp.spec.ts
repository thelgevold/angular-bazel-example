
import { Cmp6163Component } from './cmp';
describe('Cmp6163Component', () => {
  it('should add', () => {
    expect(new Cmp6163Component().add6163(1)).toBe(6164);
  });
});