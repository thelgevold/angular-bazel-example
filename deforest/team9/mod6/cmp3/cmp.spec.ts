
import { Cmp3963Component } from './cmp';
describe('Cmp3963Component', () => {
  it('should add', () => {
    expect(new Cmp3963Component().add3963(1)).toBe(3964);
  });
});