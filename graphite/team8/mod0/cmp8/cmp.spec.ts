
import { Cmp6808Component } from './cmp';
describe('Cmp6808Component', () => {
  it('should add', () => {
    expect(new Cmp6808Component().add6808(1)).toBe(6809);
  });
});