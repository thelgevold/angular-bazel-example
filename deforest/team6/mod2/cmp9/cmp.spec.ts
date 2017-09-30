
import { Cmp3629Component } from './cmp';
describe('Cmp3629Component', () => {
  it('should add', () => {
    expect(new Cmp3629Component().add3629(1)).toBe(3630);
  });
});