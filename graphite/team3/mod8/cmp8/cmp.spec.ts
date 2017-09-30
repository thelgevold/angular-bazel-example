
import { Cmp6388Component } from './cmp';
describe('Cmp6388Component', () => {
  it('should add', () => {
    expect(new Cmp6388Component().add6388(1)).toBe(6389);
  });
});