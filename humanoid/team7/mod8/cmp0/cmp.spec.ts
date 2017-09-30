
import { Cmp7780Component } from './cmp';
describe('Cmp7780Component', () => {
  it('should add', () => {
    expect(new Cmp7780Component().add7780(1)).toBe(7781);
  });
});