
import { Cmp3363Component } from './cmp';
describe('Cmp3363Component', () => {
  it('should add', () => {
    expect(new Cmp3363Component().add3363(1)).toBe(3364);
  });
});