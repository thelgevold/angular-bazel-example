
import { Cmp3603Component } from './cmp';
describe('Cmp3603Component', () => {
  it('should add', () => {
    expect(new Cmp3603Component().add3603(1)).toBe(3604);
  });
});