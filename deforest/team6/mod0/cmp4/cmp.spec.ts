
import { Cmp3604Component } from './cmp';
describe('Cmp3604Component', () => {
  it('should add', () => {
    expect(new Cmp3604Component().add3604(1)).toBe(3605);
  });
});