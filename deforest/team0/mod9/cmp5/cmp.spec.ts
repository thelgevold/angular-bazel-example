
import { Cmp3095Component } from './cmp';
describe('Cmp3095Component', () => {
  it('should add', () => {
    expect(new Cmp3095Component().add3095(1)).toBe(3096);
  });
});