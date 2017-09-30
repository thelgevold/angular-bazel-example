
import { Cmp7063Component } from './cmp';
describe('Cmp7063Component', () => {
  it('should add', () => {
    expect(new Cmp7063Component().add7063(1)).toBe(7064);
  });
});