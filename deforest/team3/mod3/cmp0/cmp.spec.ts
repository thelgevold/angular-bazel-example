
import { Cmp3330Component } from './cmp';
describe('Cmp3330Component', () => {
  it('should add', () => {
    expect(new Cmp3330Component().add3330(1)).toBe(3331);
  });
});