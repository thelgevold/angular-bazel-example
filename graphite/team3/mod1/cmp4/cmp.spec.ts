
import { Cmp6314Component } from './cmp';
describe('Cmp6314Component', () => {
  it('should add', () => {
    expect(new Cmp6314Component().add6314(1)).toBe(6315);
  });
});