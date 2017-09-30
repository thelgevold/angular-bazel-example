
import { Cmp7351Component } from './cmp';
describe('Cmp7351Component', () => {
  it('should add', () => {
    expect(new Cmp7351Component().add7351(1)).toBe(7352);
  });
});