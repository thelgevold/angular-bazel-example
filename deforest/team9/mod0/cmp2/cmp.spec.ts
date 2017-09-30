
import { Cmp3902Component } from './cmp';
describe('Cmp3902Component', () => {
  it('should add', () => {
    expect(new Cmp3902Component().add3902(1)).toBe(3903);
  });
});