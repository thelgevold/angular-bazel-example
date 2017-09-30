
import { Cmp7067Component } from './cmp';
describe('Cmp7067Component', () => {
  it('should add', () => {
    expect(new Cmp7067Component().add7067(1)).toBe(7068);
  });
});