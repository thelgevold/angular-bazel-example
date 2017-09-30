
import { Cmp3620Component } from './cmp';
describe('Cmp3620Component', () => {
  it('should add', () => {
    expect(new Cmp3620Component().add3620(1)).toBe(3621);
  });
});