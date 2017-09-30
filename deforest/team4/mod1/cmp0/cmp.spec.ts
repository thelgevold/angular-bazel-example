
import { Cmp3410Component } from './cmp';
describe('Cmp3410Component', () => {
  it('should add', () => {
    expect(new Cmp3410Component().add3410(1)).toBe(3411);
  });
});