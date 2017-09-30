
import { Cmp3080Component } from './cmp';
describe('Cmp3080Component', () => {
  it('should add', () => {
    expect(new Cmp3080Component().add3080(1)).toBe(3081);
  });
});