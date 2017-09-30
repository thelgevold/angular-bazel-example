
import { Cmp7381Component } from './cmp';
describe('Cmp7381Component', () => {
  it('should add', () => {
    expect(new Cmp7381Component().add7381(1)).toBe(7382);
  });
});