
import { Cmp6752Component } from './cmp';
describe('Cmp6752Component', () => {
  it('should add', () => {
    expect(new Cmp6752Component().add6752(1)).toBe(6753);
  });
});